import DynamicMap from './dynamic.map';
import type { SharedMapProps } from './map';

export default async function MarketSquareCarParkMap(props: SharedMapProps) {
  return (
    <DynamicMap
      title="Market Square Car Park"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1657.4586382746754!2d151.1696487924712!3d-33.81444779954386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12af77d57d309d%3A0x1bbe40d47aae5452!2sLane%20Cove%20Market%20Square%20Car%20Park!5e0!3m2!1sen!2sau!4v1728779876540!5m2!1sen!2sau"
      {...props}
    />
  );
}
