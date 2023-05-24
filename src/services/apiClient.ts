import axios from 'axios'

const url = 'api/graphql';

export async function getSellers(data: { lat: number; lng: number; }) {
  const queryData = `
    query Query($filters: SellerListInput) {
      sellers(filters: $filters) {
        email {
          value
          verified
        }
        phoneNumber {
          value
          verified
        }
        address
        description
        yellReviews
        googleReviews
        ratings
        businessLogo
        id
        town
        lat
        lng
        name
      }
    }
  `;

  const response = await axios({
    url: url,
    method: 'post',
    data: {
      query: queryData,
      variables: {
        filters: {
          lat: data.lat,
          lng: data.lng,
        }
      }
    }
  });

  console.log(response);
  return response.data.data.sellers;
}
