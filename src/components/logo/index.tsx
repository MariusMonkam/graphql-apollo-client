import { ReactElement } from "react";
import { Title } from "./logo.component";
import { LogoWrapper } from "./logowrapper.container";

const AnimLogo: React.FC = (): ReactElement => {
  const text = "Graphql App";
  const words = text.split("");
  return (
    <div>
      <LogoWrapper>
        {words.map((t, i) => (
          <Title
            key={i}
            i={i}
            variant="h6"
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            {t}
          </Title>
        ))}
      </LogoWrapper>
    </div>
  );
};

export default AnimLogo;
