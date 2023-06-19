import express from "express";
import cors from "cors";

import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://jllovnpgqxedspgptytu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpsbG92bnBncXhlZHNwZ3B0eXR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcxNzIwNDYsImV4cCI6MjAwMjc0ODA0Nn0.M4gkmvmyDn3EVTQftSRxCyItl8wUBKUY3_z4zwYzr3o";
export const supabase = createClient(supabaseUrl, supabaseKey);
const app = express();
const port = 3001;

// Configure middleware, routes, and other server settings
app.use(cors());
app.use(express.json());

app.get("/test", async (req, res) => {
  const { data, error } = await supabase.from("users").select();
  console.log(data);
  res.send(data);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});