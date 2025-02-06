import styled from "styled-components";

// Define theme variables
export const theme = {
  primaryBg: "#212529",
  cardBg: "#1a1a2e",
  borderColor: "#2f3b52",
  textPrimary: "#e0e0e0",
  textSecondary: "#b0b0b0",
  accent: "#5865f3",
};

// Houses List Container
export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  padding: 20px;
  min-height: 100vh;
  background: var(--primary-bg, ${theme.primaryBg});
  font-family: Inter, sans-serif;
`;

// House Card
export const Card = styled.div`
  background: var(--card-bg, ${theme.cardBg});
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.6);
  }
`;

// Image Wrapper
export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 2px solid var(--border-color, ${theme.borderColor});
`;

// House Info Container
export const InfoContainer = styled.div`
  padding: 15px;
  color: var(--text-primary, ${theme.textPrimary});
  text-align: center;
  font-family: Inter, sans-serif;
`;

// House Address
export const Address = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--accent, ${theme.accent});
  margin-bottom: 5px;
`;

// Price & Owner Details
export const DetailText = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary, ${theme.textSecondary});
  margin: 4px 0;
`;

// Loading Message
export const LoadingMessage = styled.p`
  color: var(--text-primary, ${theme.textPrimary});
  text-align: center;
  font-size: 1rem;
  margin: 20px 0;
  font-family: Inter, sans-serif;
`;
