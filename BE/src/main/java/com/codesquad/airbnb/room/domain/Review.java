package com.codesquad.airbnb.room.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class Review {

    private final int numberOfReviews;

    private final double reviewScoreRating;
}
