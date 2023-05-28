export interface RouteItem {
  routeName: string;
  screen: string;
  label: string;
}

export const routes: CommonJSON<RouteItem> = {
  HOME: {
    label: 'Home',
    screen: 'Home',
    routeName: 'home'
  },
  DETAIL: {
    label: 'Detail',
    screen: 'Detail',
    routeName: 'Detail'
  },
  GRAPH: {
    label: 'Graph',
    screen: 'Graph',
    routeName: 'Graph'
  },
};
