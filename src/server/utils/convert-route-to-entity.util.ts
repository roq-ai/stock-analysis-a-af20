const mapping: Record<string, string> = {
  accesses: 'access',
  companies: 'company',
  'trader-preferences': 'trader_preference',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
