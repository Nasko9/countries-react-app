interface ImageProps {
  src: string;
}

export default function CountryImage({ src }: ImageProps) {
  return <img src={`${src}`} alt="flag" className="h-96 object-scale-down" />;
}
