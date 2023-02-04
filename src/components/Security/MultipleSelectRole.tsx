import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { assignRoles, getOtherUserRoles } from "../../services/AuthService";
import Role from "../../Utils/Roles";
import { toast } from "react-toastify";

const MenuProps = {
  PaperProps: {
    style: {
      width: 50,
    },
  },
};

const roleConstant = [
  "ADMIN",
  "MEMBER",
  "PARTNER",
  "RIDER",
  "VOLUNTEER",
  "CAREGIVER",
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

type Props = {
  userId: any;
};

export default function MultipleSelectRole(props: Props) {
  const { userId } = props;
  const dumRole: any[] = [];
  const [roles, setRoles] = React.useState(dumRole);
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    getOtherUserRoles(token, userId).then((res) => {
      const roleArray: any[] = [];
      const Roles: any = Role;
      res.data.roleResponses.forEach((role: string) => {
        roleArray.push(Roles[role.replace("ROLE_", "")]);
      });
      setRoles(roleArray);
    });
  }, []);

  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent<typeof roles>) => {
    const {
      target: { value },
    } = event;
    setRoles(typeof value === "string" ? value.split(",") : value);
    const roles: any = typeof value === "string" ? "" : value?.join(",");
    const token = localStorage.getItem("token");
    if (roles.length > 0) {
      assignRoles(token, roles, userId).then((res) => {
        toast.success("Assign User Role Successfully!");
      });
    }
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 150 }}>
        <InputLabel id="demo-multiple-chip-label">Roles</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={roles}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => {
                switch (value) {
                  case 101:
                    return <Chip key={value} label={"Admin"} />;
                    break;
                  case 102:
                    return <Chip key={value} label={"Member"} />;
                    break;
                  case 103:
                    return <Chip key={value} label={"Partner"} />;
                    break;
                  case 104:
                    return <Chip key={value} label={"Rider"} />;
                    break;
                  case 105:
                    return <Chip key={value} label={"Volunteer"} />;
                    break;
                  case 106:
                    return <Chip key={value} label={"Caregiver"} />;
                    break;
                }
              })}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {roleConstant.map((role, index) => (
            <MenuItem
              key={role}
              value={101 + index}
              style={getStyles(role, roles, theme)}
            >
              {role}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
