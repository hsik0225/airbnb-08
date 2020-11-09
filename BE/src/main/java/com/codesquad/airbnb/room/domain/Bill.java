package com.codesquad.airbnb.room.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class Bill {

    private final int salesPrice;

    private final int lengthOfStay;

    private final int priceWithoutFee;

    private final int cleaningFee;

    private final int securityDeposit;

    private final int priceWithFee;
}
