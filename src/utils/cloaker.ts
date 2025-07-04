export interface CloakerConfig {
  redirectUrl: string;
  bypassParam: string;
  bypassValue: string;
  allowedFacebookParams: string[];
  allowedReferrers: string[];
}

export const defaultCloakerConfig: CloakerConfig = {
  redirectUrl: 'https://www.google.com',
  bypassParam: 'access_key',
  bypassValue: 'brute_horse_admin_2024',
  allowedFacebookParams: [
    'fbclid',
    'fb_action_ids',
    'fb_action_types',
    'fb_source',
    'fb_ref',
    'fbadid',
    'adset_id',
    'campaign_id',
    'ad_id',
    'adgroup_id',
    'gclid', // Also allow Google Ads traffic
  ],
  allowedReferrers: [
    'facebook.com',
    'fb.com',
    'm.facebook.com',
    'l.facebook.com',
    'lm.facebook.com',
    'google.com',
    'googleads.com',
  ]
};

export class FacebookCloaker {
  private config: CloakerConfig;

  constructor(config: CloakerConfig = defaultCloakerConfig) {
    this.config = config;
  }

  /**
   * Check if the current request should be allowed or redirected
   */
  public shouldAllowAccess(): boolean {
    // Check for bypass parameter first
    if (this.hasBypassParameter()) {
      console.log('🔓 Bypass parameter detected - allowing access');
      return true;
    }

    // Check for Facebook URL parameters
    if (this.hasFacebookParameters()) {
      console.log('✅ Facebook parameters detected - allowing access');
      return true;
    }

    // Check referrer
    if (this.hasValidReferrer()) {
      console.log('✅ Valid referrer detected - allowing access');
      return true;
    }

    // Check for direct access (no referrer) - might be legitimate
    if (this.isDirectAccess()) {
      console.log('⚠️ Direct access detected - allowing access');
      return true;
    }

    console.log('❌ No valid Facebook traffic detected - should redirect');
    return false;
  }

  /**
   * Perform the redirect to Google
   */
  public redirectToGoogle(): void {
    console.log(`🔄 Redirecting to: ${this.config.redirectUrl}`);
    window.location.href = this.config.redirectUrl;
  }

  /**
   * Check if bypass parameter is present
   */
  private hasBypassParameter(): boolean {
    const urlParams = new URLSearchParams(window.location.search);
    const bypassValue = urlParams.get(this.config.bypassParam);
    return bypassValue === this.config.bypassValue;
  }

  /**
   * Check if any Facebook parameters are present in URL
   */
  private hasFacebookParameters(): boolean {
    const urlParams = new URLSearchParams(window.location.search);
    
    return this.config.allowedFacebookParams.some(param => {
      const hasParam = urlParams.has(param);
      if (hasParam) {
        console.log(`📱 Found Facebook parameter: ${param}=${urlParams.get(param)}`);
      }
      return hasParam;
    });
  }

  /**
   * Check if referrer is from allowed sources
   */
  private hasValidReferrer(): boolean {
    const referrer = document.referrer.toLowerCase();
    
    if (!referrer) {
      return false;
    }

    return this.config.allowedReferrers.some(allowedReferrer => {
      const isValid = referrer.includes(allowedReferrer);
      if (isValid) {
        console.log(`🔗 Valid referrer detected: ${referrer}`);
      }
      return isValid;
    });
  }

  /**
   * Check if this is direct access (no referrer)
   */
  private isDirectAccess(): boolean {
    return !document.referrer || document.referrer === '';
  }

  /**
   * Get current traffic source information
   */
  public getTrafficInfo(): {
    source: string;
    referrer: string;
    urlParams: Record<string, string>;
    userAgent: string;
    timestamp: string;
  } {
    const urlParams = new URLSearchParams(window.location.search);
    const paramsObj: Record<string, string> = {};
    
    urlParams.forEach((value, key) => {
      paramsObj[key] = value;
    });

    let source = 'unknown';
    if (this.hasBypassParameter()) source = 'bypass';
    else if (this.hasFacebookParameters()) source = 'facebook';
    else if (this.hasValidReferrer()) source = 'referrer';
    else if (this.isDirectAccess()) source = 'direct';

    return {
      source,
      referrer: document.referrer,
      urlParams: paramsObj,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString()
    };
  }
}

// Export singleton instance
export const cloaker = new FacebookCloaker();