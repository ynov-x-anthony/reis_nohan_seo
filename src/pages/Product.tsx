import { Link, useParams } from 'react-router-dom'
import { products } from '../data'
import { useDocumentMeta } from '../useDocumentMeta'

export default function Product() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)

  useDocumentMeta({
    title: product
      ? `${product.name} à ${product.price} € | CycloShop, mobilité urbaine`
      : 'Produit introuvable | CycloShop',
    description: product
      ? `${product.name} à ${product.price} € chez CycloShop. ${product.description}`
      : undefined,
  })

  if (!product) return <p className="page">Produit introuvable.</p>

  const similaires = products.filter((p) => p.id !== product.id)

  return (
    <div className="page">
      <p>
        <Link to="/">Accueil</Link>
      </p>

      <h1>{product.name}</h1>
      <p className="price">{product.price} €</p>
      <p>{product.description}</p>

      <h2>Produits similaires</h2>
      <ul>
        {similaires.map((p) => (
          <li key={p.id}>
            <Link to={`/produits/${p.slug}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
