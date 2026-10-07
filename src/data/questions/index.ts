import { Question } from '../../types/assessment';
import { LEADERSHIP_QUESTIONS } from './leadership';
import { PRODUCT_TECH_QUESTIONS } from './productTech';
import { GROWTH_SALES_QUESTIONS } from './growthSales';
import { OPERATIONS_QUESTIONS } from './operations';

export const ALL_QUESTIONS: Record<string, Question[]> = {
  ...LEADERSHIP_QUESTIONS,
  ...PRODUCT_TECH_QUESTIONS,
  ...GROWTH_SALES_QUESTIONS,
  ...OPERATIONS_QUESTIONS,
};

export function getQuestionsForRole(roleId: string): Question[] {
  return ALL_QUESTIONS[roleId] || [];
}
