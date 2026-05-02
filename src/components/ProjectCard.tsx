type Props = {
  title: string;
  desc: string;
  link: string;
  image: string;
};

export default function ProjectCard({ title, desc, link, image }: Props) {
  return (
    <div className="card">
      <h3>{title}</h3>

      <img src={image} alt={title} width="250" />

      <p>{desc}</p>

      <a href={link} target="_blank" rel="noreferrer">
        View Project
      </a>
    </div>
  );
}