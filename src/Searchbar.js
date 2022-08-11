import React, {useState} from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { useQuery, gql } from '@apollo/client';

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

export default function Searchbar(props) {
    const planeTitle = props.planeTitle;
    // const { loading, error, data } = useQuery(GET_LOCATIONS);
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error :(</p>;

    const items = [
        {
          name: 'Cobol'
        },
        {
          name: 'JavaScript'
        },
        {
          name: 'Basic'
        },
        {
          name: 'PHP'
        },
        {
          name: 'Java'
        }
      ]
    
    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
    }

    const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
    }

    const handleOnSelect = (item) => {
        // the item selected
        console.log(item)
    }

    const handleOnFocus = () => {
        console.log('Focused')
    }

    const formatResult = (item) => {
        return (
            <>
            <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
            </>
        )
    }
    
    return (
        <div class="project">
            {/* <h3>{ planeTitle }</h3>
            <br/> */}
            <div>
                <ReactSearchAutocomplete
                    items={items}
                    onSearch={handleOnSearch}
                    onHover={handleOnHover}
                    onSelect={handleOnSelect}
                    onFocus={handleOnFocus}
                    autoFocus
                    formatResult={formatResult}
                    showIcon={false}
                />
            </div>
        </div>
    )
}
