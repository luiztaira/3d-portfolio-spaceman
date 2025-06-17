import {
    psmAlgorithm,
    reactJobs,
    videoWebsite,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "hero",
      title: "トップ",
    },
    {
      id: "portfolio",
      title: "ポートフォリオ",
    },
    {
      id: "experience",
      title: "経験",
    },
    {
      id: "contact",
      title: "問い合わせ",
    },
  ];
  
  const experiences = [
    {
      title: "webエンジニア(フルスタック)",
      company_name: "lookingup株式会社",
      date: "2024４月 - 2024年11月",
      details: [
  " <span style='color: white; display: block;'>lookingup株式会社</span>マーケティングリサーチ会社にてウェブアンケートの開発を行いました。"
]
    },
     {
      title: "AI・フルスタックエンジニア",
      company_name: "株式会社カイ",
      date: "2025 - 現在",
      details: [
        "<span style='color: white; display: block;'>株式会社カイにて</span>要件定義段階から技術選定、デスクトップアプリ・クラウドウェブアプリ・データベース等総括的な開発・実装をしました。",
      ],
    },
  ];
  
  const portfolio = [
    {
      name: "求人ウェブサイト",
      description:
        "Reactを使用して求人情報を提供するウェブサイトの開発。",
      image: reactJobs,
    },
    {
      name: "PSM計算機機",
      description:
        "PSM値を計算するアルゴリズムの実装。",
      image: psmAlgorithm,
    },
    {
      name: "ビデオウェブサイト",
      description:
        "既存の有名なビデオウェブサイトを再現してみました。",
      image: videoWebsite,
    },
  ];
  
  export { experiences, portfolio };