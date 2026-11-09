import { Link } from 'react-router-dom'
import { products } from '../data'
import { useDocumentMeta } from '../useDocumentMeta'

const description =
  "Vélos électriques pliables, trottinettes tout-terrain et casques connectés pour rouler en ville."

export default function Home() {
  useDocumentMeta({
    title: 'Vélos électriques, trottinettes et casques | CycloShop',
    description,
    ogTitle: 'CycloShop - Équipement de mobilité urbaine',
    ogDescription: description,
  })

  return (
    <div className="page">
      <h1>CycloShop</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}><Link to={`/produits/${p.slug}`}>{p.name}</Link></li>
        ))}
      </ul>
    </div>
  )
}
