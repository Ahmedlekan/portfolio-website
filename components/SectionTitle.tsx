interface Props {
    title: string;
  }
  
  const SectionTitle = ({ title}: Props) => {
    return (
      <h2 className="font-titleFont text-[30px] lgl:text-[40px] 
        font-semibold flex items-center text-center">
        {title}
      </h2>
    );
  };
  
  export default SectionTitle;