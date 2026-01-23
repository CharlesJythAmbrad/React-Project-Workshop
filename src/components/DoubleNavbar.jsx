import { NavLink } from "react-router-dom";
import {
  IconCalendarStats,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconGauge,
  IconHome2,
  IconSettings,
  IconUser,
} from "@tabler/icons-react";
import { Title, Tooltip, UnstyledButton } from "@mantine/core";
import classes from "./DoubleNavbar.module.css";

const mainLinksMockdata = [
  { icon: IconHome2, label: "Home", path: "/" },
  { icon: IconGauge, label: "Dashboard", path: "/dashboard" },
  { icon: IconDeviceDesktopAnalytics, label: "Analytics", path: "/analytics" },
  { icon: IconCalendarStats, label: "Releases", path: "/releases" },
  { icon: IconUser, label: "Account", path: "/account" },
  { icon: IconFingerprint, label: "Security", path: "/security" },
  { icon: IconSettings, label: "Settings", path: "/settings" },
];

export function DoubleNavbar() {
  return (
    <nav className={classes.navbar}>
      <div className={classes.wrapper}>
        <div className={classes.aside}>
          <div className={classes.logo}>
            <Title order={4}>Admin</Title>
          </div>

          {mainLinksMockdata.map((link) => (
            <Tooltip label={link.label} position="right" withArrow key={link.label}>
              <UnstyledButton
                component={NavLink}
                to={link.path}
                className={classes.mainLink}
                data-active={({ isActive }) => (isActive ? true : undefined)}
              >
                <link.icon size={22} stroke={1.5} />
              </UnstyledButton>
            </Tooltip>
          ))}
        </div>

        <div className={classes.main}>
          <Title order={4} className={classes.title}>
            Menu
          </Title>

          {mainLinksMockdata.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              className={({ isActive }) =>
                `${classes.link} ${isActive ? classes.active : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
