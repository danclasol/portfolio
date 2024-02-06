import ElectronIcon from "@components/icons/ElectronIcon.astro";
import JavaIcon from "@components/icons/JavaIcon.astro";
import OracleIcon from "@components/icons/OracleIcon.astro";
import ReactIcon from "@components/icons/ReactIcon.astro";
import TailwindIcon from "@components/icons/TailwindIcon.astro";
import TypeScriptIcon from "@components/icons/TypeScriptIcon.astro";

export const TECHNOLOGIES = {
  REACT: {
    name: "React",
    class: "bg-[#23262e] text-[#05d7fd] border-[#05d7fd]",
    icon: ReactIcon,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#23262e] text-[#39bcf8] border-[#39bcf8]",
    icon: TailwindIcon,
  },
  ELECTRON: {
    name: "Electron",
    class: "bg-[#23262e] text-[#05d7fd] border-[#05d7fd]",
    icon: ElectronIcon,
  },
  TYPESCRIPT: {
    name: "TypeScript",
    class: "bg-[#23262e] text-[#3078c7] border-[#3078c7]",
    icon: TypeScriptIcon,
  },
  JAVA: {
    name: "Java",
    class: "bg-[#23262e] text-[#e66e01] border-[#e66e01]",
    icon: JavaIcon,
  },
  ORACLE: {
    name: "PL/SQL",
    class: "bg-[#23262e] text-[#c84735] border-[#c84735]",
    icon: OracleIcon,
  },
};
