import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import backgroundImage from "../../assets/pictures/bgadmin.png";

export default function AdminLogin() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          p: 4,
          bgcolor: "rgba(255, 255, 255, 0.85)",
          width: 350,
          borderRadius: 2,
          boxShadow: 3,
          position: "relative",
        }}
      >
        {/* Back Button */}
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            color: "#374151",
            textTransform: "none",
          }}
        >
          Back
        </Button>

        <Typography variant="h5" mb={2} textAlign="center">
          Admin Login
        </Typography>

        <TextField fullWidth label="Email" margin="normal" />
        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
        />

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

