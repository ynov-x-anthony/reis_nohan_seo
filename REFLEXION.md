# REFLEXION.md

1. `robots.txt` empêche-t-il, à lui seul, le duplicate content entre
   `/produits?tri=prix` et `/produits?tri=prix-asc` ? Pourquoi ?

Non. `robots.txt` sert seulement à dire aux robots ce qu'ils ont le droit
d'explorer ou pas. Il ne dit pas laquelle des deux URLs est la bonne. Si on
laisse les deux ouvertes, Google voit deux pages avec le même contenu. Et si
on en bloque une, elle peut quand même se retrouver indexée (sans contenu)
si un autre site fait un lien vers elle, parce que Google ne peut pas la lire
pour comprendre que c'est un doublon. En plus les liens qui pointent vers
l'URL bloquée sont perdus.

2. Pourquoi la balise canonique est-elle l'outil adapté ici, plutôt que
   `robots.txt` ou une meta `noindex` ?

Parce que le problème n'est pas l'exploration mais le choix de l'URL à
indexer. Avec `<link rel="canonical">` les deux URLs restent accessibles pour
les visiteurs et pour Google, mais on indique que la version de référence est
`/produits?tri=prix`. Google regroupe alors les deux pages et les signaux
(liens, popularité) vont tous sur la version canonique. Avec un `noindex` la
page `prix-asc` sortirait de l'index mais ses liens ne seraient pas transmis
à l'autre, et avec `robots.txt` Google ne verrait même pas la page donc il ne
pourrait pas lire la canonique.

3. Si demain `/admin` existe sur ce site et ne doit jamais être exploré par
   Google, quelle ligne ajoutes-tu dans `robots.txt` ?

```
Disallow: /admin
```

sous le bloc `User-agent: *` (elle est déjà dans `public/robots.txt`).
