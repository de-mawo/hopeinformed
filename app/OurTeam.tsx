import { GrLinkedin } from "react-icons/gr";
import { FaEnvelope } from "react-icons/fa";

const OurTeam = () => {
  const team = [
    {
      name: "Taonga Dondo",
      job_title: "CEO & Founder",
      bio: "Former professional football player and current coach Taonga Dondo.",
      img: "/img/taonga.png",
    },
    {
      name: "CHARISSA BLOOMBERG",
      job_title: "PSYCHOLOGIST",
      bio: "Radio & TV Celebrity Psychologist, TV presenter Charissa Bloomberg is a renowned Integrity Leadership specialist.",
      img: "/img/charissa.png",
    },
    {
      name: "JUDITH BENARD",
      job_title: "SOCIAL WORKER",
      bio: " A Human Resources manager with vast years of experienceworking as  mentor to young people.",
      img: "/img/judith.png",
    },
    {
      name: "DURAN FRANCIS",
      job_title: "COACH",
      bio: " A professional coach with a Confederation of African Football license.",
      img: "/img/coach.png",
    },
  ];

  return (
    <section className="bg-white " id="our-team">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-teal-500 ">
            Our Team
          </h2>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {team.map((member, i) => (
            <div
              className="items-center bg-gray-50 rounded-lg shadow sm:flex "
              key={i}
            >
              <a href="#">
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src={member.img}
                  alt="Taonga"
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-teal-900 ">
                  <a href="#">{member.name}</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  {member.job_title}{" "}
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  {member.bio}{" "}
                </p>
                <ul className="flex space-x-6 sm:mt-0">
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900 ">
                      <GrLinkedin />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900 ">
                      <FaEnvelope />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
