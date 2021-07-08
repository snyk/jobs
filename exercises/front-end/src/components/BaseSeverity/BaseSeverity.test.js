import { shallowMount } from '@vue/test-utils';
import BaseSeverity from '~/components/BaseSeverity/BaseSeverity';

describe('BaseSeverity', () => {
  const wrapper = shallowMount(BaseSeverity);

  it('renders as expected', async () => {
    await wrapper.setProps({
      issuesCritical: 1,
      issuesHigh: 4,
      licensesHigh: 2,
      issuesMedium: 0,
      licensesMedium: 1,
      issuesLow: 8,
      licensesLow: 0,
      verbose: true,
      showCriticalSeverity: false,
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with critical as expected', async () => {
    await wrapper.setProps({
      issuesCritical: 1,
      issuesHigh: 4,
      licensesHigh: 2,
      issuesMedium: 0,
      licensesMedium: 1,
      issuesLow: 8,
      licensesLow: 0,
      verbose: true,
      showCriticalSeverity: true,
    });
    expect(wrapper).toMatchSnapshot();
  });
  describe('Defaults', () => {
    const wrapper = shallowMount(BaseSeverity);

    it('defaults to zero high issues', () => {
      expect(wrapper.props('issuesHigh')).toEqual(0);
    });

    it('defaults to zero high license issues', () => {
      expect(wrapper.props('licensesHigh')).toEqual(0);
    });

    it('defaults to zero medium issues', () => {
      expect(wrapper.props('issuesMedium')).toEqual(0);
    });

    it('defaults to zero medium license issues', () => {
      expect(wrapper.props('licensesMedium')).toEqual(0);
    });

    it('defaults to zero low issues', () => {
      expect(wrapper.props('issuesLow')).toEqual(0);
    });

    it('defaults to zero low license issues', () => {
      expect(wrapper.props('licensesLow')).toEqual(0);
    });

    it('defaults to expanded', () => {
      expect(wrapper.props('compact')).toEqual(false);
    });

    it('defaults to basic', () => {
      expect(wrapper.props('verbose')).toEqual(false);
    });
  });

  describe('Computed Properties', () => {
    const wrapper = shallowMount(BaseSeverity);

    it('computes issue counters', async () => {
      await wrapper.setProps({
        issuesHigh: 3,
        licensesHigh: 4,
        issuesMedium: 2,
        licensesMedium: 1,
        issuesLow: 6,
        licensesLow: 2,
      });

      expect(wrapper.vm.issueCounters).toEqual([
        {
          severity: 'critical',
          label: 'Critical',
          shortLabel: 'C',
          vulnerabilities: {
            count: 0,
          },
          licenses: {
            count: 0,
          },
          total: 0,
        },
        {
          severity: 'high',
          label: 'High',
          shortLabel: 'H',
          vulnerabilities: {
            count: 3,
          },
          licenses: {
            count: 4,
          },
          total: 7,
        },
        {
          severity: 'medium',
          label: 'Medium',
          shortLabel: 'M',
          vulnerabilities: {
            count: 2,
          },
          licenses: {
            count: 1,
          },
          total: 3,
        },
        {
          severity: 'low',
          label: 'Low',
          shortLabel: 'L',
          vulnerabilities: {
            count: 6,
          },
          licenses: {
            count: 2,
          },
          total: 8,
        },
      ]);
    });

    it('computes container computed classes', async () => {
      const wrapper = shallowMount(BaseSeverity, {
        propsData: {
          size: 'small',
          compact: true,
        },
      });

      expect(wrapper.vm.containerComputedClasses).toEqual({
        'vue--severity--s': true,
        'vue--severity--compact': true,
        'vue--severity--verbose-compact': false,
      });

      await wrapper.setProps({ verbose: true });

      expect(wrapper.vm.containerComputedClasses).toEqual({
        'vue--severity--s': true,
        'vue--severity--compact': false,
        'vue--severity--verbose-compact': true,
      });
    });
  });

  describe('Methods', () => {
    const wrapper = shallowMount(BaseSeverity);

    it('computes classes based on params', () => {
      const item = {
        severity: 'high',
        issue: {
          count: 4,
        },
      };
      expect(wrapper.vm.countComputedClasses(item, 'issue')).toEqual({
        'vue--severity__item--high': true,
        'vue--severity__item--none': false,
      });
    });

    it('returns issue count based on verbose state', async () => {
      const item = {
        severity: 'high',
        vulnerabilities: {
          count: 4,
        },
        licenses: {
          count: 4,
        },
        total: 8,
      };
      expect(wrapper.vm.issuesCount(item)).toEqual(8);

      await wrapper.setProps({
        verbose: true,
      });
      expect(wrapper.vm.issuesCount(item)).toEqual(4);
    });

    it('returns show true only for items with issue counts in compact state', async () => {
      await wrapper.setProps({
        verbose: false,
        compact: true,
      });

      const item1 = {
        severity: 'high',
        vulnerabilities: {
          count: 4,
        },
        licenses: {
          count: 4,
        },
        total: 8,
      };
      const item2 = {
        severity: 'high',
        vulnerabilities: {
          count: 0,
        },
        licenses: {
          count: 0,
        },
        total: 0,
      };
      expect(wrapper.vm.show(item1, 'vulnerabilities')).toBeTruthy();
      expect(wrapper.vm.show(item2, 'vulnerabilities')).toBeFalsy();
      expect(wrapper.vm.show(item1, 'licenses')).toBeTruthy();
      expect(wrapper.vm.show(item2, 'licenses')).toBeFalsy();
    });

    it('truncates numbers for very high values', () => {
      expect(wrapper.vm.formatNumber(12345)).toEqual('12k');
      expect(wrapper.vm.formatNumber(1234567)).toEqual('1M');
    });
  });
});
