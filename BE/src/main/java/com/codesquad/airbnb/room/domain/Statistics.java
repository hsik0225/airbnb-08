package com.codesquad.airbnb.room.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class Statistics {

    private final int lowestPrice;

    private final int highestPrice;

    private final int averagePrice;

    private final List<Integer> prices;

    private final int[] counts;
}
