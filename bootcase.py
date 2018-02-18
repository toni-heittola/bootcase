import os


def merge(target, override):
    """ Recursive dict merge

    Based on merge method found in dcase_util > https://github.com/DCASE-REPO/dcase_util/blob/master/dcase_util/containers/containers.py#L366

    Parameters
    ----------
    target : dict
        target parameter dict
    override : dict
        override parameter dict

    Returns
    -------
    dict
    """
    from six import iteritems

    for k, v in iteritems(override):
        if k in target and isinstance(target[k], dict) and isinstance(override[k], dict):
            target[k] = merge(target=target[k], override=override[k])

        else:
            target[k] = override[k]

    return target


def load_yaml(filename):
    import yaml

    if os.path.exists(filename):
        with open(filename, 'r') as yaml_file:
            return yaml.load(yaml_file)
    else:
        return {}


def apply_theme_defaults(theme_path, user_settings):
    theme_default_parameters = load_yaml(os.path.join(theme_path, 'theme.defaults.yaml'))
    return merge(
        target=theme_default_parameters,
        override=user_settings
    )


def show_settings(settings):
    import logging
    import pprint
    logger = logging.getLogger(__name__)

    out = pprint.pformat(settings)
    logger.debug('bootcase theme settings')
    logger.debug('====================================')
    logger.debug(out)
