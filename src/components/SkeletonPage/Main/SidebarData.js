export const SidebarData = [
  {
    title: "Perfil",
    items: [
      {
        titleItem: "Criar vaga",
        path: "/cadastro-job",
      },
      {
        titleItem: "Freelancer",
        path: `/usuarios/meu-perfil`,
      },
      {
        titleItem: "Contratante",
        path: "",
      },
    ],
  },
  {
    title: "Jobs - Contratante",
    items: [
      {
        titleItem: "Ativos",
        path: "/contratante/vagas/ATIVA",
      },
      {
        titleItem: "Em andamento",
        path: "/contratante/vagas/EM_ANDAMENTO",
      },
      {
        titleItem: "Concluídos",
        path: "/contratante/vagas/CONCLUIDA",
      },
      {
        titleItem: "Bloqueada",
        path: "/contratante/vagas/BLOQUEADA",
      },
    ],
  },
  {
    title: "Jobs - Freelancer",
    items: [
      {
        titleItem: "Inscrições",
        path: "/freelancer/vagas/ativa",
      },
      {
        titleItem: "Em andamento",
        path: "/freelancer/vagas/EM_ANDAMENTO",
      },
      {
        titleItem: "Concluídos",
        path: "/freelancer/vagas/CONCLUIDA",
      },
    ],
  },
  // {
  //   title: "Pagamentos",
  //   items: [],
  // },
];
