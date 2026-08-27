import portfolioData from '$lib/data/portfolio.json';

import type { Portfolio } from '$lib/domain';

import { ApplicationServices } from './application-services';

const portfolio = portfolioData as Portfolio;

export const services = new ApplicationServices(portfolio);