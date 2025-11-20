

export default function CoreConcept({image,title,description}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <h4>{ description}</h4>
    </li>
  )
}