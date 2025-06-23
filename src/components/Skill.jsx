/**
 * @copyright 2025 gmaarieta
 * @license Apache-2.0
 */

/**
 * Components
 */
import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/images/logos/arcgis_pro_logo.png",
    label: "ArcGIS Pro",
    desc: "ArcMap, ArcCatalog, Earth",
  },
  {
    imgSrc: "/images/logos/qgis_logo.svg",
    label: "QGIS",
    desc: "GIS Software (open-source)",
  },
  {
    imgSrc: "/images/logos/google_earth_logo.svg",
    label: "Google Earth",
    desc: "Geobrowser",
  },

  // {
  //   imgSrc: "/images/logos/onedrive_logo.svg",
  //   label: "OneDrive",
  //   desc: "Large-file Management",
  // },
  // {
  //   imgSrc: "/images/logos/box_logo.svg",
  //   label: "Box",
  //   desc: "Cross-team Collaboration",
  // },
  // {
  //   imgSrc: "/images/logos/salesforce_logo.svg",
  //   label: "Salesforce",
  //   desc: "Reporting",
  // },
  {
    imgSrc: "/images/logos/microsoft_sharepoint_logo.svg",
    label: "Microsoft Sharepoint",
    desc: "Site Structure, DB Management",
  },
  {
    imgSrc: "/images/logos/excel_logo.svg",
    label: "Microsoft Excel",
    desc: "Functions, Pivot Tables, Charts",
  },
  {
    imgSrc: "/images/logos/publisher_logo.svg",
    label: "Microsoft Publisher",
    desc: "Formatting",
  },
  // {
  //   imgSrc: "/images/logos/word_logo.svg",
  //   label: "Microsoft Word",
  //   desc: "",
  // },
  // {
  //   imgSrc: "/images/logos/powerpoint_logo.svg",
  //   label: "Microsoft Powerpoint",
  //   desc: "",
  // },
  {
    imgSrc: "/images/logos/adobe_illustrator_logo.svg",
    label: "Adobe Illustrator",
    desc: "",
  },
  {
    imgSrc: "/images/logos/adobe_photoshop_logo.svg",
    label: "Adobe Photoshop",
    desc: "",
  },
  {
    imgSrc: "/images/logos/adobe_indesign_logo.svg",
    label: "Adobe InDesign",
    desc: "",
  },
  // {
  //   imgSrc: "/images/logos/premiere_pro_logo.svg",
  //   label: "Adobe Premiere Pro",
  //   desc: "",
  // },
  // {
  //   imgSrc: "/images/logos/outlook_logo.svg",
  //   label: "Outlook",
  //   desc: "",
  // },
  {
    imgSrc: "/images/logos/power_bi_logo.svg",
    label: "Power BI",
    desc: "",
  },
  {
    imgSrc: "/images/logos/tableau_logo.svg",
    label: "Tableau",
    desc: "",
  },
  {
    imgSrc: "/images/logos/vba_logo.png",
    label: "VBA",
    desc: "",
  },
  {
    imgSrc: "/images/logos/python_logo.svg",
    label: "Python",
    desc: "",
  },
  {
    imgSrc: "/images/logos/sql_logo.svg",
    label: "SQL",
    desc: "",
  },
  {
    imgSrc: "/images/logos/google_suite_logo.svg",
    label: "Google Suite",
    desc: "",
  },

  {
    imgSrc: "/images/logos/canva_logo.svg",
    label: "Canva",
    desc: "",
  },
  {
    imgSrc: "/images/logos/flourish_logo.svg",
    label: "Flourish",
    desc: "",
  },
  {
    imgSrc: "/images/logos/figma_logo.svg",
    label: "Figma",
    desc: "",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2">Essential Tools I Use</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Here are the powerful tools and technologies I use to create and
          deliver high-quality graphics and visuals.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
