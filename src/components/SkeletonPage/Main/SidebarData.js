export const SidebarData = [
  {
    title: "Perfil",
    items: [
      {
        titleItem: "Criar vaga",
        path: "/cadastro-job",
      },
      {
        titleItem: "Perfil",
        path: `/usuarios/${0}`,
      },
      // {
      //   titleItem: "Contratante",
      //   path: "",
      // },
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
        titleItem: "Selecionado",
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
