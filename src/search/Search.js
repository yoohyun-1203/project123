import React from 'react';
import S from './style';
import { Link } from 'react-router-dom';
import FoodComponent from './FoodComponent';
import OtherComponent from './OtherComponent';
import CommunityComponent from './CommunityComponent';
import RestaurantComponent from './RestaurantComponent';

const Search = () => {
    return (
        <S.Wrapper>
            <h4>'ㅇㅇㅇ'에 대한 검색 결과</h4>
            <hr className='line' />
            {/* food 검색결과 */}
            <S.Food>
                <S.Title>
                    <h5>FOOD <span>1,327</span></h5>
                    <Link to="/">더보기</Link>
                </S.Title>
                <div style={{display:"flex", gap: "19px"}}>
                    <FoodComponent />
                    <FoodComponent />
                    <FoodComponent />
                    <FoodComponent />
                </div>
            </S.Food>
            <hr className='line' />

            {/* other 검색결과 */}
            <div className="other"></div>
                <S.Title>
                    <h5>OTHER <span>1,327</span></h5>
                    <Link to="/">더보기</Link>
                </S.Title>
                <div style={{display:"flex", gap: "19px"}}>
                    <OtherComponent />
                    <OtherComponent />
                    <OtherComponent />
                    <OtherComponent />
                </div>
            <hr className='line' />

            {/* community 검색결과 */}
            <div className="community">
                <S.Title>
                    <h5>COMMUNITY <span>1,327</span></h5>
                    <Link to="/">더보기</Link>
                </S.Title>
                <div style={{display: "flex",gap: "19px"}}>
                    <CommunityComponent />
                    <CommunityComponent />
                    <CommunityComponent />
                </div>
            </div>
            <hr className='line' />

            {/* restaurant 검색결과 */}
            <div className="restaurant">
                <S.Title>
                    <h5>RESTAURANT <span>1,327</span></h5>
                    <Link to="/">더보기</Link>
                </S.Title>
                <div style={{display:"flex",gap: "19px"}}>
                    <RestaurantComponent />
                    <RestaurantComponent />
                    <RestaurantComponent />
                </div>
            </div>
        </S.Wrapper>
    );
};

export default Search;