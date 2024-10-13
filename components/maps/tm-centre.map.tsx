import DynamicMap from './dynamic.map';
import type { SharedMapProps } from './map';

export default async function TmCentreMap(props: SharedMapProps) {
  return (
    <DynamicMap
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.8973186975018!2d151.16486469475902!3d-33.81496280426766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12afedfeb57fd9%3A0x5f070473e99a3205!2sNorth%20Shore%20Transcendental%20Meditation%20Sydney!5e0!3m2!1sen!2sau!4v1728299134488!5m2!1sen!2sau"
      {...props}
    />
  );
}
