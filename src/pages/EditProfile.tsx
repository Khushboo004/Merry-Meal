import { Avatar, TextField, MenuItem, Grid, Container } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import dayjs, { Dayjs } from "dayjs";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import {
  DesktopDatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { forwardRef, ReactElement, useEffect, useRef, useState } from "react";
import { TransitionProps } from "@mui/material/transitions";
import { createProfile, getRoles } from "../services/AuthService";
import {
  editProfile,
  getPersonalProfile,
  getProfile,
  uploadImage,
} from "../services/ProfileService";
import { toast } from "react-toastify";
import { useNavigate, useSearchParams } from "react-router-dom";

type Props = {
  action: string;
};

interface ProfileData {
  name: string;
  bornOn: Dayjs;
  gender: string;
  detail: string;
  phone_number: string;
}

const EditProfile = (props: Props) => {
  const Transition = forwardRef(function Transition(
    props: TransitionProps & {
      children: ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const [userId, setUserId] = useState(searchParams.get("userId"));
  const { action } = props;
  const birth = new Date(2002, 4, 4);
  const bornOnDemo = dayjs(birth);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [imageFile, setImageFile] = useState();
  const [image, setImage] = useState<any>();
  const [detail, setdetail] = useState("");
  const [phone_number, setphone_number] = useState("");
  const [bornOn, setBornOn] = useState(bornOnDemo);
  const [error, setError] = useState("");
  const profileRef = useRef<null | HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (action === "edit") {
      const token = localStorage.getItem("token");
      if (userId === null) {
        getPersonalProfile(token)
          .then((res) => {
            const {
              name,
              gender,
              profile_image,
              detail,
              phone_number,
              birth,
              user_id,
            } = res.data;
            setName(name);
            setGender(gender);
            setImage(profile_image);
            setdetail(detail);
            setphone_number(phone_number);
            setUserId(user_id);

            let born = birth.split("/");
            let year = born[0];
            let month = born[1];
            let day = born[2];
            console.log(born);
            let date = new Date(year, month + 1, day);
            let bornOn = dayjs(date);
            setBornOn(bornOn);
            return;
          })
          .catch((error) => {
            console.error(error);
          });
      }

      getProfile(token, userId)
        .then((res) => {
          const { name, gender, profile_image, detail, phone_number, birth } =
            res.data;
          setName(name);
          setGender(gender);
          setImage(profile_image);
          setdetail(detail);
          setphone_number(phone_number);

          let born = birth.split("/");
          let year = born[0];
          let month = born[1];
          let day = born[2];
          console.log(born);
          let date = new Date(year, month + 1, day);
          let bornOn = dayjs(date);
          setBornOn(bornOn);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);
  const formData: ProfileData = {
    name: name,
    bornOn: bornOn,
    gender: gender,
    detail: detail,
    phone_number: phone_number,
  };

  const genderOptions = ["Male", "Female"];
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const handleSave = () => {
    setOpen(false);
    const token = localStorage.getItem("token");
    let year = bornOn.get("y");
    let month = bornOn.get("M");
    let day = bornOn.get("D");
    let birth = `${year}/${month}/${day}`;
    const toastId = toast.loading("Uploading Profile ...");
    editProfile(token, userId, formData, birth)
      .then((res) => {
        toast.dismiss(toastId);
        toast.success("Profile Has Been Successfully updated!");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((res) => {
        toast.error("Update Profile Fail, please retry!");
      });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (
      name.length <= 0 ||
      gender.length <= 0 ||
      detail.length <= 0 ||
      phone_number.length <= 0
    ) {
      setError("Please fill in all required Data");
      toast.error(error);
      profileRef?.current?.scrollIntoView();
      return;
    }
    const toastId = toast.loading("Creating profile, please wait ...");
    const token = localStorage.getItem("token");
    if (token) {
      let year = bornOn.get("y");
      let month = bornOn.get("M");
      let day = bornOn.get("D");
      let birth = `${year}/${month}/${day}`;
      createProfile(token, formData, birth)
        .then((res) => {
          if (imageFile) {
            uploadImage(res.data.user_id, imageFile, token).then((res) => {
              console.log(res);
            });
          }
          let roles: any = localStorage.getItem("authorization");
          let firstRole = JSON.parse(roles)[0];
          navigate(`/${firstRole.toLowerCase()}`, { replace: true });
          toast.success("Profile Created successfully");
          toast.dismiss(toastId);
        })
        .catch((error) => {
          const errorObject = error.response.data;
          let errors = Object.keys(errorObject);
          toast.dismiss(toastId);
          errors.forEach((key) => {
            toast.error(errorObject[key]);
          });
          profileRef?.current?.scrollIntoView();
        });
    }
  };

  const fileToBase64 = async (file: any) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (e) => reject(e);
    });

  const preview = async (e: any) => {
    const imageStr: any = await fileToBase64(e.target.files[0]);
    setImage(imageStr);
    setImageFile(e.target.files[0]);
  };

  const displayDate = (date: any) => {
    const day = date.get("D");
    const month = date.get("M");
    const year = date.get("y");
    const birthYear = new Date(year, month - 1, day);
    const bornOnDemo = dayjs(birthYear);
    setBornOn(bornOnDemo);
    console.log(`${year}/${month}/${day}`);
  };
  return (
    <div className="p-10" ref={profileRef}>
      <div className="flex justify-center">
        <Avatar
          sx={{ bgcolor: deepOrange[500], width: 55, height: 55 }}
          src={
            image?.startsWith("http")
              ? image
              : `http://localhost:8080/api/v1/users/image/${image}`
          }
        >
          {action === "edit" ? name.charAt(0) : "N"}
        </Avatar>
      </div>
      <div className="flex justify-center mt-2">
        {action === "edit" ? (
          ""
        ) : (
          <input
            type="file"
            name="profileImage"
            placeholder="Change Photo"
            id="profileImage"
            onChange={(e) => preview(e)}
          />
        )}
      </div>
      <div className="grid grid-cols-2 lg:px-36 mt-8">
        <div className="p-3 font-bold">Name</div>
        <div className="">
          <TextField
            helperText="Please enter your name"
            id="demo-helper-text-aligned"
            label="Name"
            value={formData.name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 lg:px-36 mt-5">
        <div className="p-3 font-bold">Gender</div>
        <div>
          <TextField
            id="outlined-select-gender"
            select
            label="Select"
            value={formData.gender}
            helperText="Please Select Your Gender"
            onChange={(e) => setGender(e.target.value)}
            style={{
              width: "100%",
            }}
          >
            {genderOptions.map((gen) => (
              <MenuItem key={gen} value={gen}>
                {gen}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:px-36 mt-5">
        <div className="p-3 font-bold">Birth</div>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Date desktop"
              inputFormat="MM/DD/YYYY"
              value={formData.bornOn}
              renderInput={(params) => <TextField {...params} />}
              onChange={(e) => displayDate(e)}
            />
          </LocalizationProvider>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:px-36 mt-5">
        <div className="p-3 font-bold">phone_number Number</div>
        <div>
          <TextField
            id="outlined-number"
            label="Phone No."
            type="text"
            value={formData.phone_number}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setphone_number(e.target.value)}
            helperText="Please Input Your phone_number Number"
            style={{
              width: "100%",
            }}
          ></TextField>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:px-36 mt-5">
        <div className="p-3 font-bold">Detail</div>
        <div>
          <TextField
            id="standard-multiline-static"
            label="detail About You"
            multiline
            rows={4}
            onChange={(e) => setdetail(e.target.value)}
            value={formData.detail}
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div className="lg:px-36">
        {action.match("edit") ? (
          <button
            className="p-2 rounded-md bg-green-400 shadow-md shadow-green-300
          text-white"
            onClick={handleClickOpen}
          >
            Edit Profile
          </button>
        ) : (
          <button
            className="p-2 rounded-md bg-green-400 shadow-md shadow-green-300
          text-white"
            onClick={(e) => handleSubmit(e)}
          >
            Submit Profile
          </button>
        )}
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleCancel}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Confirmation for Edit"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Do You Want To <b>Replace</b> Your Profile With exisiting profile
              information.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSave}>Save Changes</Button>
            <Button onClick={handleCancel}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default EditProfile;
