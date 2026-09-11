import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { comparisonData } from '@/data/04-comparisonData';

const ComparisonSection = () => {
  const tableHeaders = comparisonData.tableHeaders;
  const features = comparisonData.features;
  const CheckIcon = comparisonData.statusIcons.checkReactIcon;
  const CrossIcon = comparisonData.statusIcons.crossReactIcon;

  return (
    <SectionWrapper sectionId='comparison' className='bg-neutral-100'>
      <SectionTitle title={comparisonData.title} />
      <div className='flex flex-col rounded-xl lg;rounded-2xl bg-white py-4 px-3 lg:py-6 lg:px-6'>
        <div className='grid grid-cols-[1fr_0.25fr_0.25fr] md:grid-cols-3 text-white bg-primary-200 rounded-full justify-items-center h-14 items-center'>
          {tableHeaders.map((header, index) => (
            <p key={index} className='font-semibold text-sm lg:text-lg px-4'>
              {header}
            </p>
          ))}
        </div>
        <div className='flex flex-col divide-y'>
          {features.map((feature) => (
            <div
              key={feature.id}
              className='grid grid-cols-[1fr_0.25fr_0.25fr] lg:grid-cols-3 items-center justify-items-center h-18'
            >
              <p className='font-medium text-sm lg:text-lg text-center px-4'>
                {feature.skillName}
              </p>
              <div className='px-4'>
                <div className='flex justify-center items-center size-6 lg:size-7 rounded-full shrink-0 bg-secondary-300 text-white'>
                  {feature.isMeSupported ? (
                    <CheckIcon className='stroke-4' />
                  ) : (
                    <CrossIcon />
                  )}
                </div>
              </div>
              <div className='px-4'>
                <div className='flex justify-center items-center size-6 lg:size-7 rounded-full shrink-0 bg-neutral-400 text-white'>
                  {feature.isOtherSupported ? (
                    <CheckIcon className='stroke-4' />
                  ) : (
                    <CrossIcon className='stroke-2' />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ComparisonSection;
