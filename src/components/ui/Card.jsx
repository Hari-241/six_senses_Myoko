import { Reveal } from '../motion/Reveal';
import { RevealImage } from '../motion/RevealImage';
import { FermentationTag } from './FermentationTag';
import './Card.css';

/**
 * Flexible card shell: a hard-edged image (optionally tagged as
 * Fermentation Valley) with a content area below. Sections compose their
 * own specific body content as children rather than this component
 * dictating one rigid internal shape — story cards, offering cards and
 * room cards all look different enough that forcing one layout would
 * fight the content.
 */
export function Card({
  image,
  aspect = '4 / 3',
  fv = false,
  eyebrow,
  title,
  children,
  footer,
  className,
  delay = 0,
}) {
  return (
    <Reveal as="article" className={`card ${className ?? ''}`} delay={delay} y={28}>
      {image ? (
        <div className="card__media">
          <RevealImage image={image} aspect={aspect} delay={delay} />
          {fv ? <FermentationTag className="card__fv-tag" /> : null}
        </div>
      ) : null}
      <div className="card__body">
        {eyebrow ? <p className="card__eyebrow">{eyebrow}</p> : null}
        {title ? <h3 className="card__title">{title}</h3> : null}
        {children}
      </div>
      {footer ? <div className="card__footer">{footer}</div> : null}
    </Reveal>
  );
}
