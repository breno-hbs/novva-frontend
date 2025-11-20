
const fs = require('fs');

const nomes = [
  "Ana","Bruno","Carla","Diego","Eduarda","Fábio","Gisele","Hugo",
  "Isabela","João","Karen","Lucas","Marina","Nicolas","Paula","Rafael"
];

const sobrenomes = ["Silva","Santos","Oliveira","Costa","Pereira","Almeida"];

const areas = ["Desenvolvimento","Design","Dados","Marketing","Produto"];

const cargos = [
  "Engenheiro de Software",
  "Desenvolvedor",
  "Analista de Sistemas",
  "Product Designer",
  "Cientista de Dados"
];

const skills = [
  "React","JavaScript","Python","SQL","Docker","Figma","Tailwind",
  "Node.js","TypeScript","Next.js"
];

const soft = ["Comunicação","Resiliência","Trabalho em equipe","Criatividade","Colaboração"];

const locais = [
  "São Paulo/SP","Rio de Janeiro/RJ","Belo Horizonte/MG",
  "Curitiba/PR","Salvador/BA","Porto Alegre/RS"
];

const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

const profiles = [];

for (let i = 1; i <= 60; i++) {
  profiles.push({
    id: i,
    nome: `${random(nomes)} ${random(sobrenomes)}`,
    foto: `./assets/images/foto${i}.jpg`,
    cargo: random(cargos),
    resumo: "Profissional com experiência em projetos web e soluções digitais.",
    localizacao: random(locais),
    area: random(areas),

    habilidadesTecnicas: [
      random(skills),
      random(skills),
      random(skills)
    ],

    softSkills: soft.sort(() => 0.5 - Math.random()).slice(0, 2),

    experiencias: [
      {
        empresa: "Empresa X",
        cargo: random(cargos),
        inicio: "2020-01",
        fim: "2023-12",
        descricao: "Participação em projetos colaborativos e desenvolvimento de soluções."
      }
    ],

    formacao: [
      {
        curso: "Bacharelado em Tecnologia",
        instituicao: "FIAP",
        ano: 2021
      }
    ],

    projetos: [
      {
        titulo: `Projeto ${i}`,
        link: "https://",
        descricao: "Projeto desenvolvido para fins acadêmicos e profissionais."
      }
    ],

    certificacoes: ["Certificação Exemplo"],
    idiomas: [
      {
        idioma: "Inglês",
        nivel: "Intermediário"
      }
    ],
    areaInteresses: ["IA", "Educação"]
  });
}

fs.writeFileSync("src/data/profiles.json", JSON.stringify(profiles, null, 2));
console.log("profiles.json gerado com sucesso!");
