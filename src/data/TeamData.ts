import { StaticImageData } from "next/image"

import teamImg_1 from "@/assets/img/team/team_img01.png"
import teamImg_2 from "@/assets/img/team/team_img02.png"
import teamImg_3 from "@/assets/img/team/team_img03.png"
import teamImg_4 from "@/assets/img/team/team_img04.png"
import teamImg_5 from "@/assets/img/team/team_img05.png"
import teamImg_6 from "@/assets/img/team/team_img06.png"
import teamImg_7 from "@/assets/img/team/team_img07.png"
import teamImg_8 from "@/assets/img/team/team_img08.png"

interface DataType {
   id: number;
   img: StaticImageData;
   title: string;
   profession: string;
}

const team_data: DataType[] = [
   {
      id: 1,
      img: teamImg_1,
      title: "Daniel Okoh",
      profession: "CEO & Founder",
   },
   {
      id: 2,
      img: teamImg_2,
      title: "Amaka Okafor",
      profession: "Chief Operations Officer",
   },
   {
      id: 3,
      img: teamImg_3,
      title: "Michael Adeyemi",
      profession: "Chief Technology Officer",
   },
   {
      id: 4,
      img: teamImg_4,
      title: "Sarah Johnson",
      profession: "Head of Compliance",
   },
   {
      id: 5,
      img: teamImg_5,
      title: "Emeka Nwosu",
      profession: "Head of Trading",
   },
   {
      id: 6,
      img: teamImg_6,
      title: "Linda Afolabi",
      profession: "Head of Education",
   },
   {
      id: 7,
      img: teamImg_7,
      title: "James Mensah",
      profession: "Senior Market Analyst",
   },
   {
      id: 8,
      img: teamImg_8,
      title: "Chioma Eze",
      profession: "Customer Success Lead",
   },
]

export default team_data;