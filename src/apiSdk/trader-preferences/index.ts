import axios from 'axios';
import queryString from 'query-string';
import { TraderPreferenceInterface, TraderPreferenceGetQueryInterface } from 'interfaces/trader-preference';
import { GetQueryInterface } from '../../interfaces';

export const getTraderPreferences = async (query?: TraderPreferenceGetQueryInterface) => {
  const response = await axios.get(`/api/trader-preferences${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createTraderPreference = async (traderPreference: TraderPreferenceInterface) => {
  const response = await axios.post('/api/trader-preferences', traderPreference);
  return response.data;
};

export const updateTraderPreferenceById = async (id: string, traderPreference: TraderPreferenceInterface) => {
  const response = await axios.put(`/api/trader-preferences/${id}`, traderPreference);
  return response.data;
};

export const getTraderPreferenceById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/trader-preferences/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteTraderPreferenceById = async (id: string) => {
  const response = await axios.delete(`/api/trader-preferences/${id}`);
  return response.data;
};
