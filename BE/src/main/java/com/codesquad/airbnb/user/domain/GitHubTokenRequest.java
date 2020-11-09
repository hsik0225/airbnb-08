package com.codesquad.airbnb.user.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GitHubTokenRequest {

    @JsonProperty("code")
    private final String code;

    @JsonProperty("client_id")
    private final String clientId;

    @JsonProperty("client_secret")
    private final String clientSecret;

    public GitHubTokenRequest(String code, GitHubOAuthProperty clientInfo) {
        this.code = code;
        this.clientId = clientInfo.getClientId();
        this.clientSecret = clientInfo.getClientSecret();
    }
}
