"use client";
import React, { useEffect, useState } from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { GridRightWrapper } from "./footerbottom.styled";

function Footerbottom() {
  return (
    <GridRightWrapper>
      Copyright
      <CopyrightIcon />
      2023.All rights reserved
    </GridRightWrapper>
  );
}
export default Footerbottom;
