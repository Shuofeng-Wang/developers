import React from "react";
import Avatar from "../src/Avatar";
import Box from "../src/Box";

export default { title: "Avatar" };

export const avatar = () => <Avatar initials={"TR"} width={100} />;
avatar.story = {
  name: "Avatar",
};

export const avatar2 = () => (
  <Avatar src={"https://i.pravatar.cc/100"} alt={"photo"} width={100} />
);
avatar2.story = {
  name: "Avatar photo",
};

export const avatarLibrary = () => (
    <div>
      <Box>
        <Avatar
            display={"inline-block"}
            initials={"A"}
            width={100}
        />

        <Avatar
            display={"inline-block"}
            initials={"B"}
            width={100}
        />

        <Avatar
            display={"inline-block"}
            initials={"C"}
            width={100}
        />

        <Avatar
            display={"inline-block"}
            initials={"D"}
            width={100}
        />

        <Avatar
            display={"inline-block"}
            initials={"E"}
            width={100}
        />

        <Avatar
            display={"inline-block"}
            initials={"F"}
            width={100}
        />
      </Box>

      <Box>
        <Avatar
            display={"inline-block"}
            initials={"G"}
            width={100}
        />

        <Avatar
            display={"inline-block"}
            initials={"H"}
            width={100}
        />

        <Avatar
            display={"inline-block"}
            initials={"I"}
            width={100}
        />

        <Avatar
            display={"inline-block"}
            initials={"J"}
            width={100}
        />

        <Avatar
            display={"inline-block"}
            initials={"K"}
            width={100}
        />

        <Avatar
            display={"inline-block"}
            initials={"L"}
            width={100}
        />
      </Box>

      <Box>
        <Avatar
            display={"inline-block"}
            initials={"M"}
            width={100}
        />

        <Avatar
            display={"inline-block"}
            initials={"N"}
            width={100}
        />

        <Avatar
            display={"inline-block"}
            initials={"O"}
            width={100}
        />

        <Avatar
            display={"inline-block"}
            initials={"P"}
            width={100}
        />

        <Avatar
            display={"inline-block"}
            initials={"Q"}
            width={100}
        />

        <Avatar
            display={"inline-block"}
            initials={"R"}
            width={100}
        />
      </Box>

      <Box>
        <Avatar
            display={"inline-block"}
            initials={"S"}
            width={100}
        />

        <Avatar
            display={"inline-block"}
            initials={"T"}
            width={100}
        />

        <Avatar
            display={"inline-block"}
            initials={"U"}
            width={100}
        />

        <Avatar
            display={"inline-block"}
            initials={"V"}
            width={100}
        />

        <Avatar
            display={"inline-block"}
            initials={"W"}
            width={100}
        />

        <Avatar
            display={"inline-block"}
            initials={"X"}
            width={100}
        />
      </Box>

      <Box>
        <Avatar
            display={"inline-block"}
            initials={"Y"}
            width={100}
        />

        <Avatar
            display={"inline-block"}
            initials={"Z"}
            width={100}
        />

        <Avatar
            display={"inline-block"}
            initials={"陈"}
            width={100}
        />

        <Avatar
            display={"inline-block"}
            initials={"ザ"}
            width={100}
        />
      </Box>
    </div>
);

avatarLibrary.story = {
  name: "Avatar Library",
};
