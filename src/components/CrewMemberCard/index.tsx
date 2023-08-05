import { FunctionComponent } from "react";

interface Props {
  picture: string;
  name: string;
  title: string;
}

const CrewMemberCard: FunctionComponent<Props> = ({ picture, name, title }) => {
  return (
    <figure className="flex flex-col space-y-4">
      <figure className="flex items-start space-x-2 lg:space-x-3">
        <img src={picture} alt={`${name}'s photo`} className="max-w-[87%]" />

        <figcaption className="text-[0.625rem] md:text-xs font-normal uppercase writing-vertical-lr font-pt-serif">
          {title}
        </figcaption>
      </figure>

      <figcaption className="text-[0.875rem] md:text-lg font-semibold">
        {name}
      </figcaption>
    </figure>
  );
};

export default CrewMemberCard;
