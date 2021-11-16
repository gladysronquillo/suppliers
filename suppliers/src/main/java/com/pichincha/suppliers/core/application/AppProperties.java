package com.pichincha.suppliers.core.application;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties
public class AppProperties {
	
	@Value("${spring.jpa.generate-ddl}")
	private Boolean generateDdl;

	@Value("${spring.jpa.show-sql}")
	private Boolean showSql;
	
	@Value("${spring.datasource.driver-class-name}")
	private String driverClassName;
	
	@Value("${spring.datasource.url}")
	private String datasourceUrl;
	
	@Value("${spring.datasource.username}")
	private String datasourceUsername;
	
	@Value("${spring.datasource.password}")
	private String datasourcePassword;
	
	@Value("${security.signing-key}")
	private String signingKey;

	@Value("${security.encoding-strength}")
	private Integer encodingStrength;

	@Value("${security.security-realm}")
	private String securityRealm;
	
	@Value("${security.jwt.client-id}")
	private String clientId;

	@Value("${security.jwt.client-secret}")
	private String clientSecret;

	@Value("${security.jwt.grant-type}")
	private String grantType;

	@Value("${security.jwt.scope-read}")
	private String scopeRead;

	@Value("${security.jwt.scope-write}")
	private String scopeWrite = "write";

	@Value("${security.jwt.resource-ids}")
	private String resourceIds;

	public Boolean getGenerateDdl() {
		return generateDdl;
	}

	public Boolean getShowSql() {
		return showSql;
	}

	public String getDriverClassName() {
		return driverClassName;
	}

	public String getDatasourceUrl() {
		return datasourceUrl;
	}

	public String getDatasourceUsername() {
		return datasourceUsername;
	}

	public String getDatasourcePassword() {
		return datasourcePassword;
	}

	public String getSigningKey() {
		return signingKey;
	}

	public Integer getEncodingStrength() {
		return encodingStrength;
	}

	public String getSecurityRealm() {
		return securityRealm;
	}

	public String getResourceIds() {
		return resourceIds;
	}

	public String getClientId() {
		return clientId;
	}

	public String getClientSecret() {
		return clientSecret;
	}

	public String getGrantType() {
		return grantType;
	}

	public String getScopeRead() {
		return scopeRead;
	}

	public String getScopeWrite() {
		return scopeWrite;
	}
	
}
