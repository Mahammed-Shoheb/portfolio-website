const SkillCard = ({ id, icon, title, text }) => {
  return (
    <article className='bg-white p-2 rounded-lg drop-shadow-lg hover:drop-shadow-2xl'>
      <div className='text-emerald-500 text-8xl mb-4'>{icon}</div>
      <h3 className='capitalize font-bold mb-3 text-2xl'>{title}</h3>
      <p className='tracking-wider'>{text}</p>
    </article>
  );
};
export default SkillCard;
