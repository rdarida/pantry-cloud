export type Details = EditableDetails & {
  errors?: string[];
  percentFull?: number;
  baskets?: string[];
};

export type EditableDetails = {
  name?: string;
  description?: string;
  notifications?: boolean;
};
