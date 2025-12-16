import { TextField, Button, Box, Typography } from "@mui/material";
import backgroundImage from "../../assets/pictures/bgadmin.png"; // Replace with your image path

export default function AdminLogin() {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // Background image
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",       // Cover entire screen
        backgroundPosition: "center",  // Center the image
        backgroundRepeat: "no-repeat", // No repeat
      }}
    >
      <Box
        sx={{
          p: 4,
          bgcolor: "rgba(255, 255, 255, 0.85)", // White with transparency
          width: 350,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" mb={2} textAlign="center">
          Admin Login
        </Typography>
        <TextField fullWidth label="Email" margin="normal" />
        <TextField fullWidth label="Password" type="password" margin="normal" />
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2, bgcolor: "#374151", ":hover": { bgcolor: "#1f2937" } }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}
