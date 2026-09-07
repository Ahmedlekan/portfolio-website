import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin, SlSocialTwitter } from "react-icons/sl";
import { socialLinks } from "@/constants/constant";

const icons = [TbBrandGithub, SlSocialLinkedin, SlSocialTwitter];

export default function RightSide() {
  return (
    <nav aria-label="Social profiles" className="flex gap-3">
      {socialLinks.map((link, index) => {
        const Icon = icons[index];
        return (
          <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
            aria-label={link.label + " (opens in a new tab)"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-700 text-xl transition-colors hover:border-textGreen hover:text-textGreen">
            <Icon aria-hidden="true" />
          </a>
        );
      })}
    </nav>
  );
}
