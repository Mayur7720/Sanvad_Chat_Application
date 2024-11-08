import { Avatar, AvatarGroup, Box, Stack } from "@mui/material";
import React from "react";

function AvatarCard({ avatar = [], max = 4 }) {
  return (
    <Stack direction={"row"} spacing={0.5}>
      <AvatarGroup max={max}>
        <Box width={"5rem"} height={"3rem"}>
          {avatar.map((src, idx) => {
            return (
              <Avatar
                key={Math.random() * 100}
                sx={{
                  width: "3rem",
                  height: "3rem",
                  position: "absolute",
                  left: {
                    xs: `${0.5 + idx}rem`,
                    sm: `${idx}rem`,
                  },
                }}
                src={src}
                alt={`avatar ${idx}`}
              />
            );
          })}
        </Box>
      </AvatarGroup>
    </Stack>
  );
}

export default AvatarCard;
