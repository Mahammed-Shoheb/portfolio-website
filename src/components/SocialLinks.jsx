import { socialLinks } from '../assets/data';

const SocialLinks = () => {
  return (
    <>
      {socialLinks.map((link) => {
        return (
          <span key={link.id}>
            <a
              href={link.href}
              target='_blank'
              className='hover:text-emerald-500'
            >
              {link.icon}
            </a>
          </span>
        );
      })}
    </>
  );
};
export default SocialLinks;
