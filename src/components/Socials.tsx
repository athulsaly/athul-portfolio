import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/athulsaly" },
  { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/athul-saly" },
];

const Socials = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles} target="_">
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
