// ============================================================
//  EDITE AQUI SEUS DADOS E PRODUTOS
// ============================================================

const PERFIL = {
  nome: "Manu Ferraz",
  descricao: "Meus achadinhos da Shopee 🧡",
  foto: "img/perfil.png", // coloque sua foto na pasta img/
  instagram: "https://instagram.com/eu.manufer", // deixe "" para esconder
  tiktok: "https://tiktok.com/@eu.manufer",      // deixe "" para esconder
};

// Cada produto:
//   nome      -> aparece no card e é usado na busca
//   imagem    -> caminho local (img/arquivo.jpg) ou URL da imagem
//   link      -> seu link de afiliado da Shopee
//   categoria -> vira um filtro rápido (opcional)
//   preco     -> opcional, ex: "R$ 39,90"
//   tags      -> palavras extras para a busca achar (opcional)
//   numero    -> opcional; útil para "produto nº 12" citado nos vídeos

const PRODUTOS = [
  {
    numero: 1,
    nome: "Garrafa térmica 1L inox",
    imagem: "img/garrafa.jpg",
    link: "https://s.shopee.com.br/SEU-LINK-1",
    categoria: "Casa",
    preco: "R$ 49,90",
    tags: ["squeeze", "água", "academia"],
  },
  {
    numero: 2,
    nome: "Organizador de maquiagem acrílico",
    imagem: "img/organizador.jpg",
    link: "https://s.shopee.com.br/SEU-LINK-2",
    categoria: "Beleza",
    preco: "R$ 34,90",
    tags: ["make", "penteadeira"],
  },
  {
    numero: 3,
    nome: "Fone bluetooth sem fio",
    imagem: "img/fone.jpg",
    link: "https://s.shopee.com.br/SEU-LINK-3",
    categoria: "Eletrônicos",
    preco: "R$ 59,90",
    tags: ["headphone", "earbuds"],
  },
  {
    numero: 4,
    nome: "Luminária LED de mesa",
    imagem: "img/luminaria.jpg",
    link: "https://s.shopee.com.br/SEU-LINK-4",
    categoria: "Casa",
    preco: "R$ 42,00",
    tags: ["abajur", "luz", "quarto"],
  },
  {
    numero: 5,
    nome: "Escova secadora 3 em 1",
    imagem: "img/escova.jpg",
    link: "https://s.shopee.com.br/SEU-LINK-5",
    categoria: "Beleza",
    preco: "R$ 89,90",
    tags: ["cabelo", "secador", "chapinha"],
  },
  {
    numero: 6,
    nome: "Kit potes herméticos de vidro",
    imagem: "img/potes.jpg",
    link: "https://s.shopee.com.br/SEU-LINK-6",
    categoria: "Cozinha",
    preco: "R$ 64,90",
    tags: ["marmita", "organização"],
  },
];
