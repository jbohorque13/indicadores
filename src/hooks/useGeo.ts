import React from 'react';
// geo
import Geolocation, {GeolocationResponse} from '@react-native-community/geolocation';

export default function useGeo () {
  const [currenyPosition, setCurrentPosition] = React.useState<GeolocationResponse>();

  React.useEffect(() => {
    function handleCurrentPosition () {
      Geolocation.getCurrentPosition(info => setCurrentPosition(info));
    }
    return handleCurrentPosition();
  }, []);

  return { currenyPosition }

}